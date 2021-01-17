import React from 'react'

export const MovieCard = props => {

    const getInfo = () => {
        const link = "https://www.themoviedb.org/movie/" + props.movie.id
         window.location.href = link
    }

    const buyTickets = () => {
        window.location.href = "https://www.gv.com.sg/"
    }

    return (
       <table key={props.movie.id}>
           <tbody>
               <tr>
                   <td>
                   <img alt="poster" width="170" src ={"https://image.tmdb.org/t/p/w185" + props.movie.poster_path} />
                   </td>
                   <td width="10"></td>
                   <td className="moviecard-title"> 
                       <h3>{props.movie.title}</h3>
                       <p className="moviecard-overview">{props.movie.overview}</p>
                       <span
                       aria-label="Movie info"
                       className="moviecard-button"
                       onClick={() => getInfo()}
                       role="button"
                       >More info
                       </span>
                       <span
                       aria-label="Buy Tickets"
                       className="moviecard-button"
                       onClick={() => buyTickets()}
                       role="button"
                       >Buy tickets
                       </span>
                   </td>
               </tr>
           </tbody>

       </table>
    )
}
