import {css} from 'lit-element';

export const styles = css`
.principal-container {
          width: 100%;
        }
        
         .form-control {
          width: auto;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        
        .lg-1 {
          width: 90%;
        }
        .lg-2 {
          width: 45%;
        }
        .lg-3 {
          width: 30%;
        }
        .md-4 {
          width: 22.5%;
        }
        .md-5 {
          width: 18%;
        }
        .md-6 {
          width: 15%;
        }
        
       @media (max-width:600px) {
        .form-control {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .lg-1, .lg-2, .lg-3, .md-4, .md-5, .md-6 {
          width: 80%;
        }
       } 
`;
