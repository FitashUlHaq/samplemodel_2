import React from "react";
import { TableBlock } from "../components/runtime/TableBlock";
import { MethodButton } from "../components/MethodButton";

const Book: React.FC = () => {
  return (
    <div id="page-book-0">
    <div id="iivtn" style={{"display": "flex", "height": "100vh", "fontFamily": "Arial, sans-serif", "--chart-color-palette": "default"}}>
      <nav id="igpe9" style={{"width": "250px", "background": "linear-gradient(135deg, #4b3c82 0%, #5a3d91 100%)", "color": "white", "padding": "20px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "--chart-color-palette": "default"}}>
        <h2 id="i84bl" style={{"marginTop": "0", "fontSize": "24px", "marginBottom": "30px", "fontWeight": "bold", "--chart-color-palette": "default"}}>{"BESSER"}</h2>
        <div id="ihxbx" style={{"display": "flex", "flexDirection": "column", "flex": "1", "--chart-color-palette": "default"}}>
          <a id="ik4tn" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "rgba(255,255,255,0.2)", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/book">{"Book"}</a>
          <a id="io8xu" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/library">{"Library"}</a>
          <a id="ih8u4" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/author">{"Author"}</a>
        </div>
        <p id="i328m" style={{"marginTop": "auto", "paddingTop": "20px", "borderTop": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "opacity": "0.8", "textAlign": "center", "--chart-color-palette": "default"}}>{"© 2025 BESSER. All rights reserved."}</p>
      </nav>
      <main id="it9yh" style={{"flex": "1", "padding": "40px", "overflowY": "auto", "background": "#f5f5f5", "--chart-color-palette": "default"}}>
        <h1 id="iqmeg" style={{"marginTop": "0", "color": "#333", "fontSize": "32px", "marginBottom": "10px", "--chart-color-palette": "default"}}>{"Book"}</h1>
        <p id="ioduh" style={{"color": "#666", "marginBottom": "30px", "--chart-color-palette": "default"}}>{"Manage Book data"}</p>
        <TableBlock id="table-book-0" styles={{"width": "100%", "minHeight": "400px", "--chart-color-palette": "default"}} title="Book List" options={{"showHeader": true, "stripedRows": false, "showPagination": true, "rowsPerPage": 5, "actionButtons": true, "columns": [{"label": "Title", "column_type": "field", "field": "title", "type": "str", "required": true}, {"label": "Pages", "column_type": "field", "field": "pages", "type": "int", "required": true}, {"label": "Stock", "column_type": "field", "field": "stock", "type": "int", "required": true}, {"label": "Price", "column_type": "field", "field": "price", "type": "float", "required": true}, {"label": "Release", "column_type": "field", "field": "release", "type": "date", "required": true}, {"label": "Time", "column_type": "field", "field": "time", "type": "time", "required": true}, {"label": "Library", "column_type": "lookup", "path": "library", "entity": "Library", "field": "name", "type": "list", "required": false}, {"label": "Authors", "column_type": "lookup", "path": "authors", "entity": "Author", "field": "name", "type": "list", "required": false}]}} dataBinding={{"entity": "Book", "endpoint": "/book/"}} />
        <div id="ip514" style={{"marginTop": "20px", "display": "flex", "gap": "10px", "flexWrap": "wrap", "--chart-color-palette": "default"}}>
          <MethodButton id="i04of" className="action-button-component" style={{"display": "inline-flex", "alignItems": "center", "padding": "6px 14px", "background": "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)", "color": "#fff", "textDecoration": "none", "borderRadius": "4px", "fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.01em", "cursor": "pointer", "border": "none", "boxShadow": "0 1px 4px rgba(37,99,235,0.10)", "transition": "background 0.2s", "--chart-color-palette": "default"}} endpoint="/book/{book_id}/methods/decrease_stock/" label="+ decrease_stock" parameters={[{"name": "qty", "type": "int", "required": true}]} isInstanceMethod={true} instanceSourceTableId="table-book-0" />
        </div>
      </main>
    </div>    </div>
  );
};

export default Book;
