/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeAndA11yProvider } from './context/ThemeAndA11yContext';
import { A11yRibbon } from './components/A11yRibbon';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RegulationCatalog } from './components/RegulationCatalog';
import { RegulatoryHierarchyView } from './components/RegulatoryHierarchyView';
import { StatisticsSection } from './components/StatisticsSection';
import { JDIHServicesSection } from './components/JDIHServicesSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { RegulationDetailModal } from './components/RegulationDetailModal';
import { RegulationComparator } from './components/RegulationComparator';
import { SavedBookmarksDrawer } from './components/SavedBookmarksDrawer';
import { SearchModal } from './components/SearchModal';
import { A11yHelpModal } from './components/A11yHelpModal';
import { GitHubModal } from './components/GitHubModal';
import { INITIAL_REGULATIONS } from './data/regulationsData';
import { Regulation } from './types/jdih';

function MainAppContent() {
  const [activeTab, setActiveTab] = useState<string>('katalog');
  const [regulations] = useState<Regulation[]>(INITIAL_REGULATIONS);

  // Search parameters shared from Hero to Catalog
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');

  // Modals & Drawers state
  const [selectedRegulation, setSelectedRegulation] = useState<Regulation | null>(null);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState<boolean>(false);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If user presses '/' when not focused on an input/textarea
      const target = e.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
      if (e.key === '/' && !isInput) {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleHeroSearch = () => {
    setActiveTab('katalog');
    // Scroll smoothly to catalog
    const catalogElem = document.getElementById('katalog-section');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectQuickTag = (tag: string) => {
    setSearchQuery(tag);
    setActiveTab('katalog');
    const catalogElem = document.getElementById('katalog-section');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRelated = (relatedId: string) => {
    const found = regulations.find((r) => r.id === relatedId);
    if (found) {
      setSelectedRegulation(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors">
      {/* Skip to Main Content Link for Screen Readers & Keyboard Nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-50 px-4 py-2 bg-emerald-800 text-white font-semibold rounded shadow-lg"
      >
        Lewati ke Konten Utama
      </a>

      {/* Operational Accessibility Ribbon */}
      <A11yRibbon
        onOpenHelpModal={() => setIsHelpModalOpen(true)}
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
      />

      {/* Top Bar Header strictly following 3-Zone Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        onPerformSearch={handleHeroSearch}
        onSelectQuickTag={handleSelectQuickTag}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Navigation Tabs Bar for mobile/quick switching */}
        <div className="md:hidden pt-4 border-b border-stone-200 dark:border-stone-800 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {[
              { id: 'katalog', label: 'Produk Hukum' },
              { id: 'silsilah', label: 'Silsilah Regulasi' },
              { id: 'statistik', label: 'Statistik' },
              { id: 'layanan', label: 'Layanan & SKM' },
              { id: 'berita', label: 'Warta' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
                  activeTab === tab.id
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* View Routing */}
        <div id="katalog-section">
          {activeTab === 'katalog' && (
            <RegulationCatalog
              regulations={regulations}
              onSelectRegulation={(reg) => setSelectedRegulation(reg)}
              onOpenCompare={() => setIsCompareOpen(true)}
              externalSearchQuery={searchQuery}
              externalSelectedType={selectedType}
              externalSelectedYear={selectedYear}
            />
          )}

          {activeTab === 'silsilah' && (
            <RegulatoryHierarchyView
              regulations={regulations}
              onSelectRegulation={(reg) => setSelectedRegulation(reg)}
            />
          )}

          {activeTab === 'statistik' && (
            <StatisticsSection
              regulations={regulations}
              onSelectRegulation={(reg) => setSelectedRegulation(reg)}
            />
          )}

          {activeTab === 'layanan' && <JDIHServicesSection />}

          {activeTab === 'berita' && <NewsSection />}
        </div>
      </main>

      {/* Institutional Legal Footer */}
      <Footer
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenGitHub={() => setIsGitHubModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      {selectedRegulation && (
        <RegulationDetailModal
          regulation={selectedRegulation}
          onClose={() => setSelectedRegulation(null)}
          onSelectRelated={handleSelectRelated}
          onOpenCompare={(regId) => {
            setSelectedRegulation(null);
            setIsCompareOpen(true);
          }}
        />
      )}

      {isCompareOpen && (
        <RegulationComparator
          regulations={regulations}
          onClose={() => setIsCompareOpen(false)}
          onSelectRegulation={(reg) => {
            setIsCompareOpen(false);
            setSelectedRegulation(reg);
          }}
        />
      )}

      <SavedBookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        regulations={regulations}
        onSelectRegulation={(reg) => {
          setSelectedRegulation(reg);
        }}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        regulations={regulations}
        onSelectRegulation={(reg) => {
          setSelectedRegulation(reg);
        }}
      />

      <A11yHelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />

      <GitHubModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeAndA11yProvider>
      <MainAppContent />
    </ThemeAndA11yProvider>
  );
}
