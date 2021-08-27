import * as action from "../../actions/index";

describe("Actions file", () => {
  it("returns the expected result for a **DATA** action: fetchDataRequest", () => {
    expect(action.fetchDataRequest()).toEqual({ type: "FETCH_DATA_REQUEST" });
    expect(action.fetchDataRequest()).not.toEqual({ type: "" });
  });

  it("returns the expected result for a **DATA** action: fetchDataSuccess", () => {
    expect(action.fetchDataSuccess({ text: "Expected data" })).toEqual({
      payload: {
        data: {
          text: "Expected data",
        },
      },
      type: "FETCH_DATA_SUCCESS",
    });
    expect(action.fetchDataSuccess({ text: "Expected data" })).not.toEqual({
      payload: {
        data: {
          text: "",
        },
      },
      type: "FETCH_DATA_ERROR",
    });
  });

  it("returns the expected result for a **DATA** action: fetchDataSuccess", () => {
    expect(action.fetchDataError("Expected data")).toEqual({
      payload: {
        error: "Expected data"
      },
      type: "FETCH_DATA_ERROR",
    });
    expect(action.fetchDataError("UNEXPECTED EXAMPLE")).not.toEqual({
      payload: {
        error: ""
      },
      type: "FETCH_DATA_ERROR",
    });
  });

  it("ensures fetchCardRequest shoud give a **CARD** action", () => {
    expect(action.fetchCardRequest()).toEqual({ type: "FETCH_CARD_REQUEST" });
    expect(action.fetchCardRequest()).not.toEqual({ type: "" });
  });

  it("ensures fetchCardSuccess shoud give a **CARD** action", () => {
    expect(action.fetchCardSuccess({ text: "Expected data" })).toEqual({
      payload: {
        data: {
          text: "Expected data",
        },
      },
      type: "FETCH_CARD_SUCCESS",
    });
    expect(action.fetchCardSuccess({ text: "Expected data" })).not.toEqual({
      payload: {
        data: {
          text: "",
        },
      },
      type: "FETCH_CARD_ERROR",
    });
  });

  it("ensures fetchDataError shoud give a **CARD** action", () => {
    expect(action.fetchCardError("Expected data")).toEqual({
      payload: {
        error: "Expected data"
      },
      type: "FETCH_CARD_ERROR",
    });
    expect(action.fetchCardError("UNEXPECTED EXAMPLE")).not.toEqual({
      payload: {
        error: ""
      },
      type: "FETCH_CARD_ERROR",
    });
  });

  it("return the expected action type to clean **CARD** data", () => {
    expect(action.cleanCardData()).toEqual({ type: "CLEAN_CARD_DATA" });
    expect(action.cleanCardData()).not.toEqual({ type: "" });
  });

  it("assign the expected value to the **FILTER** type", () => {
    expect(action.changeFilter({ type: "Test Filter Type" })).toEqual({
      payload: {
        filter: {
          type: "Test Filter Type",
        },
      },
      type: "CHANGE_FILTER",
    });
    expect(action.changeFilter({ text: "Expected data" })).not.toEqual({
      payload: {
        filter: {
          type: "",
        },
      },
      type: "CHANGE_FILTER",
    });
  });

  it("return the expected action type to remove the **FILTER**", () => {
    expect(action.removeFilter()).toEqual({ type: "REMOVE_FILTER" });
    expect(action.removeFilter()).not.toEqual({ type: "" });
  });
});
