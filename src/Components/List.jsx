import React, { useState, useRef, useEffect } from 'react';
import '../styles.css';

export default function List() {
  const [editingTable, setEditingTable] = useState(false); // For the "Add Table" input
  const [addingCard, setAddingCard] = useState({}); // Track card adding state per table

  const tableInputRef = useRef(null); // Ref for adding a table
  const listInputRef = useRef({}); // Ref for adding a list per table

  const [tables, setTables] = useState([
    { id: 1, name: 'Table 1', lists: [{ id: 1, name: 'List 1' }] }
  ]);

  // Handler to add a new table~
  function handlerAddTable(e) {
    e.preventDefault();
    const newTableName = tableInputRef.current.value.trim(); // Get table input value

    if (newTableName) {
      const newTable = {
        id: tables.length + 1, // New table ID
        name: newTableName,
        lists: [] // New table starts with an empty list
      };

      setTables((prevTables) => [...prevTables, newTable]); // Add new table to state
      tableInputRef.current.value = ''; // Clear input after adding
      setEditingTable(false); // Exit table editing mode
    }
  }

  // Handler to add a new list to a specific table
  function handlerAddList(e, tableId) {
    e.preventDefault();
    const newListName = listInputRef.current[tableId].value.trim(); // Get list input value for specific table

    if (newListName) {
      setTables((prevTables) =>
        prevTables.map((table) =>
          table.id === tableId
            ? {
              ...table,
              lists: [...table.lists, { id: table.lists.length + 1, name: newListName }]
            }
            : table
        )
      );
      listInputRef.current[tableId].value = ''; // Clear input after adding
      setAddingCard((prev) => ({ ...prev, [tableId]: false })); // Exit card adding mode for this table
    }
  }

  useEffect(() => {
    if (editingTable && tableInputRef.current) {
      tableInputRef.current.focus(); // Focus on table input when in edit mode
    }
  }, [editingTable]);

  return (
    <div style={{ display: 'flex', zIndex: 1 }}>
      {/* Add a new table */}
      {!editingTable && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <input
            type='text'
            readOnly
            placeholder=' + Add another table...'
            className='list-input'
            onClick={() => setEditingTable(true)}
          />
        </div>
      )}

      {editingTable && (
        <div className='list-input-add-container'>
          <form onSubmit={handlerAddTable}>
            <input
              placeholder='Enter table name...'
              type="text"
              className='list-input-add'
              ref={tableInputRef} // Use table-specific ref
            />
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'flex-start' }}>
              <button type='submit' className='add-list-blue-btn'>
                Add...Table
              </button>
              <button type='button' className='add-list-cross-btn' onClick={() => setEditingTable(false)}>
                X
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Display all tables */}
      {tables.map((table) => (
        <div key={table.id} className='list-input-add-container'>
          <div className='table-name-container'>
            <div className='table-name'>{table.name}</div>
            <div className='three-dot-icon'>...</div>
          </div>

          {/* Display lists within the table */}
          {table.lists.map((list) => (
            <div className='list-item' key={list.id}>
              {list.name}
            </div>
          ))}

          {/* Add a new list to the current table */}
          <form onSubmit={(e) => handlerAddList(e, table.id)}>
            {!addingCard[table.id] && (
              <input
                style={{ marginBottom: '3px' }}
                onClick={() => setAddingCard((prev) => ({ ...prev, [table.id]: true }))}
                type='text'
                placeholder='+ Add another Card...'
                className='add-card'
              />
            )}
          </form>

          {addingCard[table.id] && (
            <form onSubmit={(e) => handlerAddList(e, table.id)}>
              <input
                type="text"
                className='list-input-add'
                ref={(el) => (listInputRef.current[table.id] = el)} // Use list-specific ref per table
              />
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'flex-start' }}>
                <button type='submit' className='add-list-blue-btn'>
                  Add...List
                </button>
                <button type='button' className='add-list-cross-btn' onClick={() => setAddingCard((prev) => ({ ...prev, [table.id]: false }))}>
                  X
                </button>
              </div>
            </form>
          )}
        </div>
      ))}
    </div>
  );
}
