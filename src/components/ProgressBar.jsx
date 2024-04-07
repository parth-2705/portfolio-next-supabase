const ProgressBar = ({ level, total }) => {
  const progressWidth = (level * 100) / total;
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-inside"
        style={{
          width: `${progressWidth}%`,
          height: "100%",
        }}
      >
        {/* {level}/{total} */}
      </div>
    </div>
  );
};

export default ProgressBar;
