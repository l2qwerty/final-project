import { Switch, Route } from "react-router-dom";
import Books from "../../components/main/Books";
import NotFound from "../../components/NotFound";
import BookId1 from "../../components/main/booksId/BookId1";
import BookId2 from "../../components/main/booksId/BookId2";
import BookId3 from "../../components/main/booksId/BookId3";
import BookId4 from "../../components/main/booksId/BookId4";
import BookId5 from "../../components/main/booksId/BookId5";
import BookId6 from "../../components/main/booksId/BookId6";

function BooksRoutes() {
  return (
    <Switch>
      <Route exact path="/books" component={Books} />
      <Route path="/books/id-1" component={BookId1} />
      <Route path="/books/id-2" component={BookId2} />
      <Route path="/books/id-3" component={BookId3} />
      <Route path="/books/id-4" component={BookId4} />
      <Route path="/books/id-5" component={BookId5} />
      <Route path="/books/id-6" component={BookId6} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default BooksRoutes;
