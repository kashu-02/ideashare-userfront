'use client'
import {useState, useCallback} from 'react'
import type * as React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Header from './header'
import Issue from './issue'

interface Props {
    issues : {
        id: string;
        shortTitle: string;
        rewards: number;
        deadline: string;
        imageUrl: string;
        Company:{
            name: string;
        }
    }[]
}
export default function HomeMainWrapper(props : Props) {
    const [filteredIssues, setFilteredIssues] = useState(props.issues)

    const doSearch = (keyword : string) =>{
        if(keyword === ""){
            setFilteredIssues(props.issues)
            return
        }
        setFilteredIssues(props.issues.filter((issue) => issue.shortTitle.includes(keyword)))
    }

    return (
        <>
            <Header doSearch={doSearch}/>
            <Grid container spacing={3} sx={{margin: '1rem'}}>
                {filteredIssues.map((issue, index) => (
                    <Grid xs={6} sm={4} md={3} key={index} display="flex" justifyContent="center" alignItems="center">
                        <Issue data={issue}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}