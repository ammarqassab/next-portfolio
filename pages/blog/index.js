import React, { useCallback } from 'react'
import {compile} from '@mdx-js/mdx'

const blog = () => {
    // let compiled = await compile({value: '# Using MDX with Next.js'}, {format: 'mdx'});

    // React.useEffect(useCallback(async() => {
    //     compiled = await compile({value: '# Using MDX with Next.js'}, {format: 'mdx'})
    // }) 
    // ,[]);

    return (
        <div className="mdx">
            blog
        </div>
    )
}

export default blog
