// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, clientTlsPolicyId, clientTlsPolicy) {
  // [START networksecurity_v1beta1_generated_NetworkSecurity_CreateClientTlsPolicy_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the ClientTlsPolicy. Must be in
   *  the format `projects/* /locations/{location}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Short name of the ClientTlsPolicy resource to be created. This
   *  value should be 1-63 characters long, containing only letters, numbers,
   *  hyphens, and underscores, and should not start with a number. E.g.
   *  "client_mtls_policy".
   */
  // const clientTlsPolicyId = 'abc123'
  /**
   *  Required. ClientTlsPolicy resource to be created.
   */
  // const clientTlsPolicy = {}

  // Imports the Networksecurity library
  const {NetworkSecurityClient} = require('@google-cloud/network-security').v1beta1;

  // Instantiates a client
  const networksecurityClient = new NetworkSecurityClient();

  async function callCreateClientTlsPolicy() {
    // Construct request
    const request = {
      parent,
      clientTlsPolicyId,
      clientTlsPolicy,
    };

    // Run request
    const [operation] = await networksecurityClient.createClientTlsPolicy(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateClientTlsPolicy();
  // [END networksecurity_v1beta1_generated_NetworkSecurity_CreateClientTlsPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
