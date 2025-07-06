type TypeSearch= {
    score: number;
    show: {
      id: number;
      url: string;
      name: string;
      type: string;
      language: string;
      genres: string[];
      status: string;
      runtime: number;
      averageRuntime: number;
      premiered: string;
      ended: string;
      officialSite: string;
      schedule: {
        time: string;
        days: string[];
      };
      rating: {
        average: number;
      };
      image: {
        medium: string;
        original: string;
      };
    };
  };
  