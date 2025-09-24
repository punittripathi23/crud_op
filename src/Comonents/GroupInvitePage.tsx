 import React, { useEffect, useState } from "react";
import DeepLinkHandler from "./DeepLinkHandler";

const GroupInvite: React.FC = () => {
  const [params, setParams] = useState<{ groupId: string; userId: string; type: string; groupName: string } | null>(
    null
  );

  useEffect(() => {
    const query = window.location.search.substring(1); // remove "?"
    const [groupId, userId, type, groupName] = query.split("/");

    if (groupId && userId && type && groupName) {
      setParams({ groupId, userId, type, groupName });
    }
  }, []);

  if (!params) return <div>Invalid or missing invite link</div>;

  return <DeepLinkHandler {...params} />;
};

export default GroupInvite;
