import styled from "styled-components"
import { colors,vars } from "../../styles/GlobalStyle"


export const FixedSideBar = styled.aside`


${({ isPageHome }) =>
      isPageHome
        ? `
        ul li:nth-child(1){
        background-color: ${colors.third}; 
        }
        ul li:nth-child(2){
          background-color: ${colors.thirdLight}; 
          }
      `
        : `
        ul li:nth-child(1){
          background-color: ${colors.thirdLight}; 
          }
          ul li:nth-child(2){
            background-color: ${colors.third}; 
            }
`}
p{
  padding: 1rem;
}
height: 100%; /* Full-height: remove this if you want "auto" height */
  width: ${vars.size_side_bar}; /* Set the width of the sidebar */

  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; 
  border-right: 0.5rem solid ${colors.primary};
  ul li a{
    text-align:center;
    text-decoration:none;
    color:${colors.white};
    
  }
  ul li{
    padding:0.5rem;
    border-radius:3px;
    margin:0.5rem;
  }
  @media (max-width: 1000px){
    width: 100px;
  }

`
