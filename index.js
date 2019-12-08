const CaseService = require('./lib/case-service')
const ContactService = require('./lib/contact-service')
const DocumentService = require('./lib/document-service')
const FileService = require('./lib/file-service')
const UserService = require('./lib/user-service')

module.exports = options => {
  if (!options) throw TypeError('Missing required input: options')
  if (!options.host) throw TypeError('Missing required input: options.host')
  if (!options.authkey) throw TypeError('Missing required input: options.authkey')

  return {
    CaseService: CaseService(options),
    ContactService: ContactService(options),
    DocumentService: DocumentService(options),
    FileService: FileService(options),
    UserService: UserService(options)
  }
}
