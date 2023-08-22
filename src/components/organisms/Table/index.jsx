import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Skeleton
} from '@mui/material'
import FilterSection from '../../molecules/FilterSection'
import {useReactTable, getCoreRowModel, flexRender} from '@tanstack/react-table'
import {Colors} from '../../../utils/constants'
import {useStore} from '../../../context/store'

export default function TableComponent({
  columns,
  data = [],
  dataLength = 0,
  noDataText = 'No Data Found',
  filterList = []
}) {
  const {loading} = useStore((state) => state)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true
  })

  return (
    <>
      {/* if there are no tasks at all, do not show filter section */}
      {dataLength ? (
        <Grid container padding={1} width="100%" display="flex" justifyContent="space-between">
          <Grid item display="flex" justifyContent="flex-end" xs={12}>
            <FilterSection filterList={filterList} />
          </Grid>
        </Grid>
      ) : null}
      <TableContainer component={Paper} sx={{boxShadow: 'none', border: `1px solid #9e9e9e`}}>
        <Table sx={{minWidth: 700}} aria-label="customized table" size="small">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} sx={{backgroundColor: 'lightgrey'}}>
                {headerGroup.headers.map((header, head_index) => {
                  return (
                    <TableCell
                      key={header.id}
                      colSpan={header.colSpan}
                      sx={{
                        textAlign: head_index === headerGroup.headers.length - 1 ? 'center' : 'left'
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 700,
                            textTransform: 'uppercase'
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </span>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {/* if filtered tasks list in not empty, then show table rows */}
            {data.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow key={row.id} sx={{backgroundColor: Colors.LIGHT}}>
                    {row.getVisibleCells().map((cell, cell_index) => {
                      return (
                        <TableCell
                          key={cell.id}
                          sx={{
                            fontSize: 16,
                            textDecoration:
                              row.original.is_complete && cell.column.id === 'description'
                                ? 'line-through'
                                : 'none',
                            textAlign:
                              cell_index === table.getHeaderGroups()[0].headers?.length - 1
                                ? 'center'
                                : 'left',
                            padding: loading ? '0 1rem' : 0
                          }}
                        >
                          {loading ? (
                            <Skeleton
                              animation="wave"
                              height={40}
                              padding={0}
                              sx={{
                                '&::before': {
                                  display: 'none'
                                }
                              }}
                            />
                          ) : (
                            flexRender(cell.column.columnDef.cell, cell.getContext())
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })
            ) : (
              // if no data exists, show not found text
              <TableRow>
                <TableCell sx={{p: 2, fontSize: 24}} align="center" colSpan={columns.length}>
                  {noDataText}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
