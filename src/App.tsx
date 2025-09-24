import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupInvite from "./Comonents/GroupInvitePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/group.html" element={<GroupInvite />} />
      </Routes>
    </Router>
  );
}

export default App;
 