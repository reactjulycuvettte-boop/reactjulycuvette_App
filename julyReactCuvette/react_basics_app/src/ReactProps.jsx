const ReactProps = (props) => {
  const { title = 'Default Title', backgroundColor = 'turquoise' } = props;
  return (
    <div style={{ backgroundColor: backgroundColor, padding: '10px', marginBottom: '30px' }}>
      <h1>{title}</h1>
      <p>This is a task</p>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>Click me</button>
    </div>
  );
};

export default ReactProps;