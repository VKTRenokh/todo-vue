export interface Todo {
  name: string
  description: string
  id: number
}

export const isTodo = (obj: unknown): obj is Todo => {
  if (typeof obj !== 'object' || !obj) {
    return false
  }

  return (
    'name' in obj &&
    'description' in obj &&
    'id' in obj &&
    typeof obj.name === 'string' &&
    typeof obj.description === 'string' &&
    typeof obj.id === 'number'
  )
}

export const IsTodoArray = (array: unknown): array is Todo[] => {
  if (!Array.isArray(array)) {
    return false
  }

  return array.every((todo) => isTodo(todo))
}
