import { useEffect, useState } from "react";

import { Button, Grid } from "@mui/material";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Pagination({ page, rpp, rowCount, onChangePage, onChangeRpp, rppOptions = [10,25,50,100], compact = false }: { page: number, maxPages: number, rpp?: number, rowCount: number, onChangePage: (page: number) => void, onChangeRpp?: ((rpp: number) => void) | undefined, rppOptions?: number[], compact?: boolean }) {
    const [maxPages, setMaxPages] = useState(1);

    useEffect(() => {
        if (!rpp) setMaxPages(1);
        else setMaxPages(Math.floor(rowCount / rpp) + 1);
    }, [rpp, rowCount]);
    
    const nextPage = () => {
        let next = page + 1;
        if (next > maxPages) {
            next = 1;
        }
        onChangePage(next);
    };
    const previousPage = () => {
        let prev = page - 1;
        if (prev <= 0) {
            prev = maxPages;
        }
        onChangePage(prev);
    };

    const updatePage = (newPage: number) => {
        if (newPage > 0 && page != newPage && page <= maxPages) {
            onChangePage(newPage);
        }
    };
    const updateRpp = (newRpp: number) => {
        if (newRpp > 0 && rpp != newRpp) {
            onChangeRpp && onChangeRpp(newRpp);
        }
    };

    const [pages, setPages] = useState<number[]>([]);

    useEffect(() => {
        if (maxPages <= 2) {
            setPages([]);
        }
        else if (maxPages == 3) {
            setPages([2]);
        }
        else if (maxPages == 4) {
            setPages([2,3]);
        }
        else if (maxPages == 5) {
            setPages([2,3,4]);
        }
        else if (page == maxPages - 2) {
            setPages([maxPages - 3,maxPages - 2,maxPages - 1]);
        }
        else if (compact && page > maxPages - 2) {
            setPages([maxPages - 2,maxPages - 1,maxPages]);
        }
        else if (page <= 2) {
            setPages(compact ? [1,2,3] : [2,3,4]);
        }
        else {
            setPages([page - 1,page,page + 1]);
        }
    }, [page, maxPages]);

    return (
        <Grid className="syw-pagination">
            {rpp && rppOptions && onChangeRpp ?
            <Grid className="syw-pagination-content-container">
                <Grid className="syw-pagination-rpp-container">
                    <Grid className='syw-pagination-rpp-text'>results per page</Grid>
                </Grid>
                <Grid className="syw-pagination-rpp-container">
                    {rppOptions.slice(0,4).map(rppOption => {
                        return (
                            <Button key={`rpp-${rppOption}`}
                                className={`syw-button default bordered syw-pagination-button${rpp === rppOption ? ' selected' : ''}`}
                                onClick={() => updateRpp(rppOption)}
                            >
                                {rppOption}
                            </Button>
                        );
                    })}
                </Grid>
                <Grid className="syw-pagination-rpp-container">
                    <Grid className="syw-pagination-rpp-text">{rowCount} results</Grid>
                </Grid>
            </Grid>
            : <></>}
            <Grid className="syw-pagination-content-container">
                <Grid className="syw-pagination-container w-100">
                    {compact ? <></> :
                    <Grid className="syw-pagination-container">
                        <Button variant="outlined"
                            className="syw-button default bordered syw-pagination-prev-page-button"
                            onClick={() => previousPage()}
                        >
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                        </Button>
                    </Grid>}
                    <Grid className="syw-pagination-container">
                        {compact ?
                        <Grid className="syw-pagination-pages-container center">
                            <Button variant="outlined"
                                className="syw-button default bordered syw-pagination-prev-page-button"
                                onClick={() => previousPage()}
                            >
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                            </Button>
                            <Button variant="outlined"
                                className={`syw-button default bordered syw-pagination-button${page == 1 ? ' selected' : ''}`}
                                onClick={() => { updatePage(1); }}
                            >
                                1
                            </Button>
                            <Button variant="outlined"
                                className={`syw-button default bordered syw-pagination-button${page == maxPages ? ' selected' : ''}`}
                                onClick={() => { updatePage(maxPages); }}
                            >
                                {maxPages}
                            </Button>
                            <Button variant="outlined"
                                className="syw-button default bordered syw-pagination-next-page-button"
                                onClick={() => nextPage()}
                            >
                                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </Button>
                        </Grid> : <></>}
                        <Grid className="syw-pagination-pages-container center">
                            {compact ? <></> :
                            <>
                                <Button variant="outlined"
                                    className={`syw-button default bordered syw-pagination-button${page == 1 ? ' selected' : ''}`}
                                    onClick={() => { updatePage(1); }}
                                >
                                    1
                                </Button>
                            </>}
                            {page > 3 ? <>...</> : <></>}
                            {pages.map(pageNumber => {
                                return (
                                    <Button key={`page-${pageNumber}`} variant="outlined"
                                        className={`syw-button default bordered syw-pagination-button${page == pageNumber ? ' selected' : ''}`}
                                        onClick={() => { updatePage(pageNumber); }}
                                    >
                                        {pageNumber}
                                    </Button>
                                );
                            })}
                            {pages.length > 0 && page < maxPages - 3 ? <>...</> : <></>}
                            {compact ? <></> :
                            <>
                                <Button variant="outlined"
                                    className={`syw-button default bordered syw-pagination-button${page == maxPages ? ' selected' : ''}`}
                                    onClick={() => { updatePage(maxPages); }}
                                >
                                    {maxPages}
                                </Button>
                            </>}
                        </Grid>
                    </Grid>
                    {compact ? <></> :
                    <Grid className="syw-pagination-container">
                        <Button variant="outlined"
                            className="syw-button default bordered syw-pagination-next-page-button"
                            onClick={() => nextPage()}
                        >
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </Button>
                    </Grid>}
                </Grid>
                <Grid className="syw-pagination-rpp-container">
                    <Grid className="syw-pagination-rpp-text">page: {page}</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { Pagination };