import useJsonFetch from "../hooks/use-json-fetch";

function Data() {
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_URL + 'data');

  return (
    <div>
      <h3>Data</h3>
      {data && <code>{JSON.stringify(data)}</code>}
    </div>
  );
}

export default Data;