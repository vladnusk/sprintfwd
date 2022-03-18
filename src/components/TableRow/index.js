export default function TableRow({ content, columns }) {
  const renderNestedItem = ((columnHead, content) => {
    const { render, id } = columnHead;
    return <td key={id}>{ render ? render(content) : content[id]}</td>;
  });

  return (
    <tr>
      {columns.map((column) => {
        return renderNestedItem(column, content);
      })}
    </tr>
  );
};