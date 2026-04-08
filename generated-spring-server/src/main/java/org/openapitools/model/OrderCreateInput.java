package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import org.openapitools.model.Address;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * OrderCreateInput
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-04-08T10:47:06.539361157Z[Etc/UTC]", comments = "Generator version: 7.22.0-SNAPSHOT")
public class OrderCreateInput {

  private String customerName;

  @Valid
  private List<UUID> products = new ArrayList<>();

  private BigDecimal totalAmount;

  private Address shippingAddress;

  public OrderCreateInput() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public OrderCreateInput(String customerName, List<UUID> products, BigDecimal totalAmount, Address shippingAddress) {
    this.customerName = customerName;
    this.products = products;
    this.totalAmount = totalAmount;
    this.shippingAddress = shippingAddress;
  }

  public OrderCreateInput customerName(String customerName) {
    this.customerName = customerName;
    return this;
  }

  /**
   * Get customerName
   * @return customerName
   */
  @NotNull 
  @Schema(name = "customerName", example = "Amine", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("customerName")
  public String getCustomerName() {
    return customerName;
  }

  @JsonProperty("customerName")
  public void setCustomerName(String customerName) {
    this.customerName = customerName;
  }

  public OrderCreateInput products(List<UUID> products) {
    this.products = products;
    return this;
  }

  public OrderCreateInput addProductsItem(UUID productsItem) {
    if (this.products == null) {
      this.products = new ArrayList<>();
    }
    this.products.add(productsItem);
    return this;
  }

  /**
   * Get products
   * @return products
   */
  @NotNull @Valid 
  @Schema(name = "products", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("products")
  public List<UUID> getProducts() {
    return products;
  }

  @JsonProperty("products")
  public void setProducts(List<UUID> products) {
    this.products = products;
  }

  public OrderCreateInput totalAmount(BigDecimal totalAmount) {
    this.totalAmount = totalAmount;
    return this;
  }

  /**
   * Get totalAmount
   * @return totalAmount
   */
  @NotNull @Valid 
  @Schema(name = "totalAmount", example = "1500", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("totalAmount")
  public BigDecimal getTotalAmount() {
    return totalAmount;
  }

  @JsonProperty("totalAmount")
  public void setTotalAmount(BigDecimal totalAmount) {
    this.totalAmount = totalAmount;
  }

  public OrderCreateInput shippingAddress(Address shippingAddress) {
    this.shippingAddress = shippingAddress;
    return this;
  }

  /**
   * Get shippingAddress
   * @return shippingAddress
   */
  @NotNull @Valid 
  @Schema(name = "shippingAddress", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("shippingAddress")
  public Address getShippingAddress() {
    return shippingAddress;
  }

  @JsonProperty("shippingAddress")
  public void setShippingAddress(Address shippingAddress) {
    this.shippingAddress = shippingAddress;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderCreateInput orderCreateInput = (OrderCreateInput) o;
    return Objects.equals(this.customerName, orderCreateInput.customerName) &&
        Objects.equals(this.products, orderCreateInput.products) &&
        Objects.equals(this.totalAmount, orderCreateInput.totalAmount) &&
        Objects.equals(this.shippingAddress, orderCreateInput.shippingAddress);
  }

  @Override
  public int hashCode() {
    return Objects.hash(customerName, products, totalAmount, shippingAddress);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderCreateInput {\n");
    sb.append("    customerName: ").append(toIndentedString(customerName)).append("\n");
    sb.append("    products: ").append(toIndentedString(products)).append("\n");
    sb.append("    totalAmount: ").append(toIndentedString(totalAmount)).append("\n");
    sb.append("    shippingAddress: ").append(toIndentedString(shippingAddress)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(@Nullable Object o) {
    return o == null ? "null" : o.toString().replace("\n", "\n    ");
  }
}

