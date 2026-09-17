export function ProjectPreview() {
  return (
    <div
      className="project-preview"
      aria-label="Sample property project overview"
    >
      <div className="preview-top">
        <strong>YOUR PROPERTY, IN FOCUS</strong>
        <span className="sample-label">UI preview</span>
      </div>
      <svg
        className="blueprint"
        viewBox="0 0 400 200"
        role="img"
        aria-label="Illustrative architectural floor plan"
      >
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M52 35h295v130H52zM52 102h112V35m0 67v63m0-88h95v88m0-95h88M289 70v53h58" />
          <path
            d="M67 50h80v36H67zM67 119h63v28H67zM186 91h51v51h-51z"
            stroke="#F2B84B"
          />
          <path
            d="M52 22h295M40 35v130M347 178H52"
            stroke="#94A3B8"
            strokeDasharray="4 4"
          />
          <path
            d="M309 123v22h38m-70 20v-24a24 24 0 0 1 24 24"
            stroke="#F2B84B"
          />
        </g>
        <g fill="#4B5563" fontSize="9" fontFamily="sans-serif">
          <text x="87" y="69">
            LIVING
          </text>
          <text x="187" y="63">
            COURTYARD
          </text>
          <text x="277" y="53">
            BEDROOM
          </text>
        </g>
      </svg>
      <h2>From a plan to a clear next step.</h2>
      <p>
        A considered approach to planning, building and caring for your
        property.
      </p>
      <div className="preview-row">
        <span>01 · Plan</span>
        <strong>Define your requirements</strong>
      </div>
      <div className="preview-row">
        <span>02 · Connect</span>
        <strong>Discuss relevant expertise</strong>
      </div>
      <div className="preview-row">
        <span>03 · Progress</span>
        <strong>Agree the work together</strong>
      </div>
    </div>
  );
}
