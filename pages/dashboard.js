import Dashboard from "../components/dashboard";

const dashboard = () => {
  return (
    <>
    {typeof window !== undefined && <Dashboard />}
    </>
  );
};

export default dashboard;
