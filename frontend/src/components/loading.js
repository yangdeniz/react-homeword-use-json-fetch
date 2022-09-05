import useJsonFetch from "../hooks/use-json-fetch";

function Loading() {
  const [data, loading, error] = useJsonFetch(process.env.REACT_APP_URL + 'loading');

  return (
    <div>
      <h3>Loading</h3>
      <p>{loading ? 'Loading is in progress' : 'Loaded'}</p>
    </div>
  );
}

export default Loading;