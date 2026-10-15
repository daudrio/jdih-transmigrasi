import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type TextScale = 'normal' | 'large' | 'extra';

interface ThemeAndA11yContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
  textScale: TextScale;
  setTextScale: (scale: TextScale) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  bookmarks: string[];
  toggleBookmark: (id: string) => boolean;
  isBookmarked: (id: string) => boolean;
  comparisonList: string[];
  addToCompare: (id: string) => boolean;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  announce: (message: string) => void;
  announcement: string;
  isSpeaking: boolean;
  speakText: (text: string) => void;
  stopSpeaking: () => void;
}

const ThemeAndA11yContext = createContext<ThemeAndA11yContextType | undefined>(undefined);

export const ThemeAndA11yProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jdih_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // A11y text scale
  const [textScale, setTextScaleState] = useState<TextScale>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('jdih_text_scale') as TextScale) || 'normal';
    }
    return 'normal';
  });

  // High contrast
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('jdih_high_contrast') === 'true';
    }
    return false;
  });

  // Bookmarks
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('jdih_bookmarks');
        return stored ? JSON.parse(stored) : ['permen-trans-1-2025', 'perpres-142-2024'];
      } catch {
        return ['permen-trans-1-2025'];
      }
    }
    return [];
  });

  // Comparison list (max 2)
  const [comparisonList, setComparisonList] = useState<string[]>(['permen-trans-1-2025', 'permendesa-14-2018']);

  // Screen reader announcement
  const [announcement, setAnnouncement] = useState<string>('');

  // Audio Speech synthesis
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('jdih_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('jdih_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-scale-normal', 'text-scale-large', 'text-scale-extra');
    root.classList.add(`text-scale-${textScale}`);
    localStorage.setItem('jdih_text_scale', textScale);
  }, [textScale]);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('contrast-125', 'grayscale-[0.1]');
      localStorage.setItem('jdih_high_contrast', 'true');
    } else {
      root.classList.remove('contrast-125', 'grayscale-[0.1]');
      localStorage.setItem('jdih_high_contrast', 'false');
    }
  }, [highContrast]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      announce(`Mode tampilan beralih ke ${next ? 'Gelap' : 'Terang'}`);
      return next;
    });
  };

  const setTheme = (dark: boolean) => {
    setIsDark(dark);
    announce(`Mode tampilan beralih ke ${dark ? 'Gelap' : 'Terang'}`);
  };

  const setTextScale = (scale: TextScale) => {
    setTextScaleState(scale);
    const label = scale === 'normal' ? 'Normal (100%)' : scale === 'large' ? 'Sedang (115%)' : 'Besar (130%)';
    announce(`Ukuran teks diubah ke ${label}`);
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => {
      const next = !prev;
      announce(`Mode kontras tinggi ${next ? 'diaktifkan' : 'dinonaktifkan'}`);
      return next;
    });
  };

  const toggleBookmark = (id: string): boolean => {
    let isAdded = false;
    setBookmarks((prev) => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter((item) => item !== id);
        announce('Regulasi dihapus dari daftar tersimpan');
      } else {
        updated = [...prev, id];
        isAdded = true;
        announce('Regulasi berhasil disimpan ke daftar favorit');
      }
      try {
        localStorage.setItem('jdih_bookmarks', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
    return isAdded;
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const addToCompare = (id: string): boolean => {
    if (comparisonList.includes(id)) return false;
    if (comparisonList.length >= 2) {
      setComparisonList([comparisonList[1], id]);
    } else {
      setComparisonList([...comparisonList, id]);
    }
    announce('Regulasi ditambahkan ke perbandingan');
    return true;
  };

  const removeFromCompare = (id: string) => {
    setComparisonList((prev) => prev.filter((item) => item !== id));
    announce('Regulasi dikeluarkan dari perbandingan');
  };

  const clearCompare = () => {
    setComparisonList([]);
    announce('Daftar perbandingan dikosongkan');
  };

  const announce = (message: string) => {
    setAnnouncement(message);
    setTimeout(() => {
      setAnnouncement('');
    }, 4000);
  };

  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      announce('Browser tidak mendukung pembacaan suara teks');
      return;
    }
    window.speechSynthesis.cancel();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
      announce('Mulai membacakan naskah');
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      announce('Selesai membacakan naskah');
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    announce('Pembacaan suara dihentikan');
  };

  return (
    <ThemeAndA11yContext.Provider
      value={{
        isDark,
        toggleTheme,
        setTheme,
        textScale,
        setTextScale,
        highContrast,
        toggleHighContrast,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        comparisonList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        announce,
        announcement,
        isSpeaking,
        speakText,
        stopSpeaking
      }}
    >
      {children}
      {/* Invisible Screen Reader Live Region */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </ThemeAndA11yContext.Provider>
  );
};

export const useThemeAndA11y = () => {
  const context = useContext(ThemeAndA11yContext);
  if (!context) {
    throw new Error('useThemeAndA11y must be used within a ThemeAndA11yProvider');
  }
  return context;
};
