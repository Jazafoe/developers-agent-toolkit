# Mastercard Agent Toolkit - TypeScript

CSC Logo
Don’t forget your $30 gift!
In case you missed it, there’s a thank-you gift waiting for you. Thanks for being part of our CSC family! Grab music, meals, and more, on us.

Claim Your Gift
Nift Gift Card
Get your Nift gift at: www.GoNift.com
Gift Code: 4TH2XC
Gift Value: $30
Expires: 02/28/2026


Nift happiness guarantee.
We’re committed to making sure you love your experience — if something’s not right, we’ll make it right. It’s our promise. Please get in touch with us, and let us do the right thing! Contact us

Join the 100+ million people who use Nift to get great gifts.

As seen on Today, CBS, NBC, Fox, Google
Nift gifts are designed to make it easy for people to discover and try something new. Nift gifts are non-transferable, for use by named gift recipient only, and are not valid for cash. Nift gifts may only be redeemed at participating Nift-member businesses, at the business location selected, for the goods and services listed, once per party or per visit, and before it expires. Depending on what you choose to purchase, taxes, and shipping fees, you may need to cover some additional costs. Gifts may not be combined with promotions or sales, or used toward gratuity. By selecting a gift, you agree to receive email reminders and surveys from Nift and the selected Nift member business. If you select a gift valued at less than $30, Nift will email your remaining balance for use in selecting a second gift. You may also receive additional Nift cards as a reward for being a great customer.

CSC Serviceworks Logo
Copyright ©  2021 CSC ServiceWorks, Inc. All rights reserved.

This email was sent by: CSCPay Mobile

35 Pinelawn Rd, Suite 120, Melville, NY 11747

We respect your right to privacy - view our policy.

Click here to unsubscribe from marketing emails.



<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://developer.mastercard.com/_/_/src/global/assets/svg/mcdev-logo-light.svg">
  <img src="https://developer.mastercard.com/_/_/src/global/assets/svg/mcdev-logo-dark.svg" alt="mastercard developers logo">
</picture>

The Mastercard Developers Agent Toolkit allows popular agent frameworks (currently Model Context Protocol - MCP) to integrate with [Mastercard Developers](https://developer.mastercard.com) for service discovery and integration guides.

## Installation

```bash
npm install --save @mastercard/developers-agent-toolkit
```

### Requirements

- Node 18+

## Usage

You can optionally specify `service` or `apiSpecification` as part of the configuration.

- `service`: URL of the documentation of a service that you want the MCP to focus on e.g. `https://developer.mastercard.com/mdes-customer-service/documentation`
- `apiSpecification`: URL of the API specification that you want the MCP tools to focus on e.g. `https://static.developer.mastercard.com/content/match/swagger/match-pro.yaml`. You can get the link from `Download Spec` button in the `API Reference` page of service.
  NOTE: This will override any value provided in `service` configuration.

If you specify `service` or `api-specification` then the `get-services-list` tool will be disabled.

```typescript
import { MastercardDevelopersAgentToolkit } from '@mastercard/developers-agent-toolkit/mcp';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new MastercardDevelopersAgentToolkit({
  configuration: {
    service: 'https://developer.mastercard.com/open-finance-us/documentation',
  },
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Mastercard Developers MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
```

## References

- [Mastercard Developers Platform](https://developer.mastercard.com/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [MCP SDKs](https://github.com/modelcontextprotocol)
