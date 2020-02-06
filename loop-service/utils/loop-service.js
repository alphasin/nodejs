class Looper {
  constructor(opts) {
    opts = opts || {};

    this.mongodbConnectionString = opts && opts.mongodbConnectionString;
    this.limit = opts && opts.limit;
    this.sort = opts && opts.sort;
    this.query = opts && opts.query;
    this.collections = opts && opts.collections || [];
  }

  connectMongoDB(cb) {

  }

  getRecords(dbService, cb) {
    dbService.find({
      query:this.query,
      limitRecord: this.limit,
      sort: this.sort
    }, (result, error) => {
      cb(result, error);
    })
  }

  createJobs(queryResult, cb) {
    if (!queryResult) {
      console.log('============ STOP SERVICE BECAUSE DON\'T HAVE ANY JOB');
      process.exit();
    }

    
  }

  runner() {
    try {
      this.connectMongoDB(cb);
      this.initDbService(cb);
      this.getRecords(dbService, cb);
      this.createJobs(queryResult, cb);
    } catch(error) {
      console.log(error);
    }
  }
}
