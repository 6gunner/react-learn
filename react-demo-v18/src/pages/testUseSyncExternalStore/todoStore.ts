let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners: Array<() => void> = [];

export const todoStore = {
  addTodo: () => {
    todos = [...todos, {
      id: nextId++,
      text: `Todo #${nextId}`
    }];
    emitChange();
  },
  /**
   * 订阅store的变化
    传入一个callback方法，
    当store变化的时候，应该触发callback，触发re-render
    并且这里需要返回一个unsubscribe方法取消订阅
   *  */
  subscribe: (callback: () => void) => {
    listeners = [...listeners, callback];
    return () => {
      listeners = listeners.filter(l => l !== callback)
    }
  },

  // 返回当前store的data，重复调用getSnapshot方法必须返回相同的value
  getSnapshot: () => {
    return todos
  },

  // 返回store的初始化的值。
  // 在服务端渲染、hydration of server-rendered content on the client时会执行
  getServerSnapshot: () => {
  }
}

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}