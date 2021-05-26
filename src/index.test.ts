import {
  Action,
  createStore,
  Reducer,
  State,
} from "@vasiliev-alexey/otus_redux_sample";

describe(" test import", () => {
  it("has func createStore", () => {
    expect(createStore).toBeInstanceOf(Function);
  });

  it("has fun reducer", () => {
    const reducer: Reducer<State> = (state: State, action: Action): State => {
      const newState: State = action["payload"] as State;
      return newState;
    };
    expect(reducer).toBeInstanceOf(Function);
  });

  it("create store", () => {
    const reducer: Reducer<State> = (state: State, action: Action): State => {
      const newState: State = action["payload"] as State;
      return newState;
    };
    const store = createStore(reducer, {});
    expect(store).not.toBeNull();
  });

  it("execute dispatch", () => {
    const reducer: Reducer<State> = (state: State, action: Action): State => {
      const newState: State = action["payload"] as State;
      return newState;
    };
    const store = createStore(reducer, {});
    expect(store).not.toBeNull();

    const renewState = {
      val: 1,
    };

    const simpleAction: Action = {
      type: "simple",
      payload: renewState,
    };

    store.dispatch(simpleAction);

    expect(store.getState()).not.toBeNull();
    expect(store.getState()).toEqual(renewState);
  });
});
