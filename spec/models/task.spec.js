describe("Task", function() {
  var Task = global.db.task;

  it("should create", function(done) {
    Task.sync({ force: true }).then(function(task) {
      Task.create({ title: 'a title' }).then(function(task) {
        expect(task.title).toBe('a title');
        done();
      });
    });
  });
});
