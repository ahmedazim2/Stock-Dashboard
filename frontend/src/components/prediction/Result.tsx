import React from 'react'
import "../../styles/results.scss"

interface ResultProps {
    result: string;
}

const Result: React.FC<ResultProps> = ({ result }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: result }} className='resultdiv' />
    )
}

export default Result