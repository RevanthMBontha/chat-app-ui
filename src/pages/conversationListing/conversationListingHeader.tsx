import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Input } from '../../components/input';

export function ConversationListingHeader() {
  const [searchChats, setSearchChats] = useState('');
  return (
    <div className="flex items-center w-full h-[80px]">
      <Input
        value={searchChats}
        setValue={setSearchChats}
        placeholder="Type to search..."
        beforeComponent={<CiSearch className="text-gray-500" size={20} />}
        parentStyle=""
        inputStyle=""
      />
    </div>
  );
}
