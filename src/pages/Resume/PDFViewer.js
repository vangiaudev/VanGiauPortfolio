import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function SinglePage(props) {
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    function onDocumentLoadSuccess({ numPages }) {
        setPageNumber(1);
    }

    const { pdf } = props;

    return (
        <>
            <Document
                file={pdf}
                options={{ workerSrc: '/pdf.worker.js' }}
                onLoadSuccess={onDocumentLoadSuccess}
                renderMode="svg"
            >
                <Page width={320} pageNumber={pageNumber} />
            </Document>
        </>
    );
}
