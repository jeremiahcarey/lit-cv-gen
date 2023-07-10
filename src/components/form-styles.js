import { css } from "lit";

export const formStyles = css`
  .form-container {
    margin: 0;
    padding: 0;
  }

  .job-header,
  .ed-header {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .job-header h1,
  .ed-header h1 {
    font-size: 1.3rem;
  }

  collapsible-div button {
    font-size: 0.8rem;
    padding: 0.3rem;
    border: 2px solid black;
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
  }

  collapsible-div button:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
  }

  collapsible-div button:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .input-group input {
    padding: 0.5rem;
    width: 15rem;
    min-width: 75%;
    border: 1px solid rgb(218, 209, 209);
    border-radius: 0.33em;
  }

  .input-group textarea {
    padding: 0.5rem;
    border: 1px solid rgb(218, 209, 209);
    width: 15rem;
    min-width: 75%;
    height: 5rem;
    border-radius: 0.33em;
    resize: none;
  }

  .input-el {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
