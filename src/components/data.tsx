"use client"

import { api } from '@/services/api'
import { Button } from '@mui/material'
import React from 'react'
import { useMutation } from 'react-query'

interface TClient {
  id: 0,
  numeroDocumento: string,
  tipoDocumento: string,
  nome: string,
  logradouro: string,
  numero: string,
  bairro: string,
  cidade: string,
  uf: string
}

const fetchBody = {
  numeroDocumento: "123456",
  tipoDocumento: "CNH",
  nome: "Thales",
  logradouro: "Rua",
  numero: "520",
  bairro: "Cu Preto",
  cidade: "Pica Branca",
  uf: "CU"
}

const Display: React.FC = () => {

  const { isLoading, data, mutate } = useMutation({
    mutationFn: async () => {
      const { data } = await api.post('/api/v1/Cliente', fetchBody)
      return data as TClient[]
    }
  });

  return (
    <div className='p-2'>
      <Button onClick={() => { mutate() }}>Send Data</Button>
      { isLoading ? 'loading...' : JSON.stringify(data) }
    </div>
  )
}

export default Display


// data?.map((client: TClient) => {
//         return (
//           <div key={client.id} className='flex gap-4'>
//             <h1>{client.nome}</h1>
//             <span>{client.numero}</span>
//           </div>
//         )
//       }