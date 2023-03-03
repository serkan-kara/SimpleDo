import SampleComponent from "../components/SampleComponent";
import useSampleHook from "../hooks/useSampleHook";
import "./SampleView.scss";

const SampleView = () => {
  useSampleHook();

  return (
    <section className="sample-view">
      <header>
        <h1>Sample View</h1>
      </header>
      <div>
        <p>This is a sample view.</p>
        <SampleComponent />
      </div>
    </section>
  );
};

export default SampleView;
