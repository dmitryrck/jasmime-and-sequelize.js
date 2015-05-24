describe("Task", function() {
  var Task = global.db.task;

  beforeEach(function() {
    Task.sync();
  });

  afterEach(function() {
    Task.destroy({ truncate: true });
  });

  it("create", function() {
    Task.create({ title: 'a title' }).then(function(task) {
      expect(task.title).toBe('a title');
    });
  });

  it("create again", function() {
    this.complete = { title: 'Task#1', complete: true };
    this.incomplete = { title: 'Task#2', complete: false };

    Task.bulkCreate([
      this.complete,
      this.incomplete
    ]).then(function() {
      Task.scope('active').findAll().then(function(tasks) {
        expect(tasks.length).toBe(1);
      });
    });
  });
});
