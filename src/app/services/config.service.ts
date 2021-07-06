import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getAllConfigs() {
    return configsList;
  }

}

const configsList: Object[] = [
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  {
    configName:'Test Config',
    configId: 'qwe213wqe123eqwe2312i24i23g5ugy2324h2fyd2uywgr',
    bet1: {
      home: true,
      favourite: true,
      sportsBook: ['MatchBookBet1'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'78%'
    },
    bet2: {
      sportsBook: ['MatchBookBet2'],
      pregame:true,
      minGameTime:12000,
      below:80,
      above:30,
      percentageChange:'68%',
      qualification: {
        referenceLine: 43.5,
        range: 68.9,
        period: 48000
      },
      recoveryMargin: 65.98
    }
  },
  
]
