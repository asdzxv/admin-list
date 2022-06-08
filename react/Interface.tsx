import React from 'react'
import { createSystem, PageHeader, PageTitle } from '@vtex/admin-ui'
import { FormattedMessage } from 'react-intl'

import ProviderInterface from './provider/providerInterface'
import Table from './components/Table'
import { messages } from './utils/definedMessages'

const [ThemeProvider] = createSystem({
  key: 'admin-interface-shopkeeper',
})

function Interface() {
  return (
    <ProviderInterface>
      <ThemeProvider>
        <PageHeader>
          <PageTitle>
            <FormattedMessage {...messages.title} />
          </PageTitle>
        </PageHeader>
        <Table />
      </ThemeProvider>
    </ProviderInterface>
  )
}

export default Interface
