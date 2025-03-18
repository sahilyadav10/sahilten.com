import { MouseEvent, useState, useEffect } from "react";

type Section = {
  label: string;
  href: string;
};

export default function useNavigation(navItems: Section[]) {
  const [activeSection, setActiveSection] = useState("/");
  const visibleSections = new Map<string, number>();
  const allSections = new Set(navItems.map((item) => item.href));

  const updateAllSectionsVisibility = () => {
    allSections.forEach((href) => {
      const id = href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const ratio = Math.max(0, visibleHeight / rect.height);

        if (ratio > 0) {
          visibleSections.set(href, ratio);
        } else {
          visibleSections.delete(href);
        }
      }
    });
  };

  /**
   * Determine which section should be active based on visibility
   * Priority:
   * 1. Fully visible sections (>95% visible)
   * 2. Section with highest visibility (>20% visible)
   * 3. Home section as fallback
   */
  const updateActiveSection = () => {
    if (visibleSections.size === 0) {
      setActiveSection("/#home");
      return;
    }

    // Find sections that are almost fully visible (>95%)
    const fullyVisibleSections = Array.from(visibleSections.entries()).filter(
      ([, ratio]) => ratio > 0.95
    );

    if (fullyVisibleSections.length > 0) {
      setActiveSection(fullyVisibleSections[0][0]);
      return;
    }

    // If no fully visible sections, find the most visible one
    const visibleSectionsArray = Array.from(visibleSections.entries());
    const findMostVisibleSection = (sections: [string, number][]) => {
      return sections.reduce((mostVisible, current) => {
        const [, currentRatio] = current;
        const [, mostVisibleRatio] = mostVisible;
        return currentRatio > mostVisibleRatio ? current : mostVisible;
      });
    };

    const [mostVisibleSection, highestVisibilityRatio] =
      findMostVisibleSection(visibleSectionsArray);

    if (highestVisibilityRatio > 0.2) {
      setActiveSection(mostVisibleSection);
    }
  };

  const handleScroll = () => {
    updateAllSectionsVisibility();
    updateActiveSection();
  };

  useEffect(() => {
    // Setup throttled scroll handler to prevent performance issues
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const throttledHandleScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll(); // Initial visibility check

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.split("#")[1];
    const element = document.getElementById(id);

    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.warn("Target section not found:", id);
    }
  };
  console.log("hehreh");
  return { activeSection, handleNavClick };
}
