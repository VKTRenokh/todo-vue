import { h, type FunctionalComponent } from 'vue'
import type { Todo } from '@/stores/types/todo'
import './todo-item-fc.css'

interface Props {
  todo: Todo
}

type Emits = {
  delete(): void
}

/**
 * Functional component are used here for better performance because they have
 * no reactivity and no instance.
 */
export const TodoItem: FunctionalComponent<Props, Emits> = (props, ctx) => {
  return h('div', { className: 'todo' }, [
    h('h2', [props.todo.name]),
    h('p', [props.todo.description]),
    h('button', { onClick: () => ctx.emit('delete') }, ['delete'])
  ])
}
