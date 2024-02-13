/// Record
{
      type RECORD<K extends string | number | symbol, V> = {
        [P in K]: V 
      }

      type A = RECORD<'name' | 'age', string | number>
      type B = Record<string, string | number>

      const ys: A = {
        name: 'yurushi',
        age: 21
      }
}