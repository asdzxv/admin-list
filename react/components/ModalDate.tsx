import {
  Button,
  experimental_DatePickerCalendar,
  experimental_DatePickerField,
  experimental_I18nProvider,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  tag,
} from '@vtex/admin-ui'
import type { FC } from 'react'
import React from 'react'
import { useIntl } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'

import { useLists } from '../hooks/useLists'
import { modal } from '../utils/definedMessages'

const ModalDateArea: FC = () => {
  const {
    modalState,
    datePersonalizeInitial,
    datePersonalizeFinal,
    salveDatePersonalizate,
  } = useLists()

  const { formatMessage } = useIntl()

  const DatePickerField = experimental_DatePickerField
  const DatePickerCalendar = experimental_DatePickerCalendar
  const I18nProvider = experimental_I18nProvider

  const { culture } = useRuntime()

  return (
    <Modal
      aria-label={formatMessage(modal.ariaLabel)}
      state={modalState}
      size="small"
    >
      <ModalHeader title={formatMessage(modal.title)} />
      <ModalContent>
        <I18nProvider locale={culture.locale}>
          <tag.div
            csx={{
              paddingBottom: '15px',
            }}
          >
            <DatePickerField
              label={formatMessage(modal.dateInitial)}
              state={datePersonalizeInitial}
            />
            <DatePickerCalendar
              state={datePersonalizeInitial}
              csx={{ zIndex: 100000 }}
            />
          </tag.div>
          <DatePickerField
            label={formatMessage(modal.dateFinal)}
            state={datePersonalizeFinal}
          />
          <DatePickerCalendar
            state={datePersonalizeFinal}
            csx={{ zIndex: 100000 }}
          />
        </I18nProvider>
      </ModalContent>
      <ModalFooter>
        <Button
          onClick={(e: { preventDefault: () => void }) => {
            e.preventDefault()
            salveDatePersonalizate()
          }}
        >
          {formatMessage(modal.confirm)}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalDateArea
