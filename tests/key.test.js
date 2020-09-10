const { setValueManually, show, remove } = require("../commands/key");

/* Currently the tests don't work! - DO NOT RUN THEM OR THEY WILL BREAK */
test("should output key value", () => {
    const firstKey = show();
    remove();
    const key = setValueManually("testing-key-142");
    setValueManually(firstKey);
    expect(key).toBe("testing-key-142");
});
