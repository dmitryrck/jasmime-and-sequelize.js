describe("Task", function() {
  var Task = global.db.task;

  beforeEach(function(done) {
    Task.sync();
    done();
  });

  afterEach(function(done) {
    Task.destroy({ truncate: true });
    done();
  });

  it("create", function(done) {
    Task.create({ title: 'a title' }).then(function(task) {
      expect(task.title).toBe('a title');
      done();
    });
  });

  it("create again", function(done) {
    this.complete = { title: 'Task#1', complete: true };
    this.incomplete = { title: 'Task#2', complete: false };

    Task.bulkCreate([
      this.complete,
      this.incomplete
    ]).then(function() {
      Task.scope('active').findAll().then(function(tasks) {
        expect(tasks.length).toBe(1);
        done();
      });
    });
  });
});
