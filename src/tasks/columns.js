export const columns = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Title
      </button>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Status
      </button>
    ),
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Priority
      </button>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Category
      </button>
    ),
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Due Date
      </button>
    ),
  },
];