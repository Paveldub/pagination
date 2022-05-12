

export const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul style={{display: 'flex'}}>
            {pageNumbers.map((number) => (
                <li key={number} style={{listStyle: 'none', marginRight: 5}} onClick={() => paginate(number)}>
                    <a href="!#">
                        {number}
                    </a>
                </li>
            ))}
           
        </ul>
    )
}