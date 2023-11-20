import FreteButton from "../components/FreteButton";
import FreteInput from "../components/FreteInput";

function Home() {
  return (
    <div className="home">
      <FreteInput
        onCepChange={function (_value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <FreteButton
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        loading={true}
      />
    </div>
  );
}

export default Home;
