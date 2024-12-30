const Home = () => {
  const env = process.env || {};

  const printEnv = (env) => {
    return JSON.stringify(env);
    // return env.map((key) => {
    //   return <li key={key}>{key}</li>;
    // });
  };
  return (
    <div>
      Home
      <div>{printEnv(env)}</div>
    </div>
  );
};

export default Home;
