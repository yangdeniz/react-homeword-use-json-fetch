import useJsonFetch from "../hooks/use-json-fetch";

function Error() {
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_URL + 'error');
  return (
    <div>
      <h3>Error</h3>
      <p>{error}</p>
    </div>
  );
}

export default Error;