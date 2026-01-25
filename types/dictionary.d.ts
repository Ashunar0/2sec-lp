export interface Dictionary {
  hero: {
    title: string;
    subtitle: string;
    caption: string;
  };
  concept: {
    title: string;
    p1: string;
    p2: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      split: {
        title: string;
        description: string;
      };
      notification: {
        title: string;
        description: string;
        mock: {
          title: string;
          subtitle: string;
        };
      };
      efficiency: {
        title: string;
        description: string;
        mock: {
          clips: string;
        };
      };
    };
  };
  howToUse: {
    title: string;
    subtitle: string;
    steps: {
      id: string;
      title: string;
      description: string;
      detail: string;
    }[];
  };
  download: {
    title: string;
    description: string;
    button: string;
    note: string;
  };
  information: {
    title: string;
    subtitle: string;
    support: {
      label: string;
      title: string;
      description: string;
      link: string;
    };
    terms: {
      label: string;
      title: string;
      description: string;
      link: string;
    };
    privacy: {
      label: string;
      title: string;
      description: string;
      link: string;
    };
  };
  footer: {
    copyright: string;
  };
  navbar: {
    getStarted: string;
  };
  friends: {
    title: string;
    description: string;
    openApp: string;
    notInstalled: string;
    download: string;
    autoOpening: string;
    fallbackMessage: string;
  };
}
